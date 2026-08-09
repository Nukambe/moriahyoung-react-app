import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../App";
import validateContactForm from "../lib/validateContactForm";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe("routing", () => {
  it("renders the hero on the home route", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Moriah");
  });

  it("renders the voice demos", () => {
    renderAt("/voice");
    expect(screen.getByRole("tab", { name: /full demos/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /play commercial demo/i })).toBeInTheDocument();
  });

  it("shows a 404 page for unknown routes", () => {
    renderAt("/nope");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/take it again/i);
  });
});

describe("voice player", () => {
  it("opens the transport bar when a track is selected", async () => {
    const user = userEvent.setup();
    renderAt("/voice");

    expect(screen.queryByRole("region", { name: /audio player/i })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /play narration demo/i }));
    expect(screen.getByRole("region", { name: /audio player/i })).toBeInTheDocument();
  });
});

describe("contact form validation", () => {
  it("flags every empty field", () => {
    const errors = validateContactForm({ name: "", email: "", inquiry: "" });
    expect(Object.keys(errors)).toEqual(["name", "email", "inquiry"]);
  });

  it("accepts a complete inquiry", () => {
    const errors = validateContactForm({
      name: "Jordan Rivera-O'Neil",
      email: "jordan@studio.com",
      inquiry: "We need a warm commercial read for a 30 second national spot.",
    });
    expect(errors).toEqual({});
  });

  it("surfaces validation errors on submit", async () => {
    const user = userEvent.setup();
    renderAt("/contact");

    await user.click(screen.getByRole("button", { name: /send inquiry/i }));
    expect(await screen.findByText(/please tell me your name/i)).toBeInTheDocument();
  });
});
