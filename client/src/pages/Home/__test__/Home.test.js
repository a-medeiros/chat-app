import React from "react";
import Home from "../Home";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should renders a text saying 'Bem vindo ao Chatroom', text explaining how it works, username input, interests input and a submit button", () => {
    render(<Home />);
    const text = screen.getByText(/Bem vindo ao Chatroom!/i);
    const introText = screen.getByTestId("intro-text");
    const usernameInput = screen.getByTestId("username-input");
    const interestsInput = screen.getByTestId("interests-input");
    const submitButton = screen.getByTestId("submit-button");

    expect(text).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(interestsInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.textContent).toBe("Fazer novo amigo");
})