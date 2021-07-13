import React from "react";
import Chat from "../Chat";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should show an input field and a submit buttom", () => {
    render(<Chat />);
    const messageInput = screen.getByTestId("message-input");
    const submitMessageBtn = screen.getByTestId("submit-message-button");

    expect(messageInput).toBeInTheDocument();
    expect(submitMessageBtn).toBeInTheDocument();
    expect(submitMessageBtn).toHaveAttribute("type", "submit");
})