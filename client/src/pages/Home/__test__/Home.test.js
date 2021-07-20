import React from "react";
import Home from "../Home";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("should render site's name and description", () => {
    render(<Home />);
    const name = screen.getByText(/Chatroom/i);
    const description = screen.getByTestId("description");

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
})

it("should render a form with name field, interests field, file input and button", () => {
    render(<Home />);
    const nameField = screen.getByTestId("name-field");
    const interestsField = screen.getByTestId("interests-field");
    const profilePhotoInput = screen.getByTestId("profile-photo-input");
    const newFriendButton = screen.getByTestId("new-friend-button");

    expect(nameField).toBeInTheDocument();
    expect(interestsField).toBeInTheDocument();
    expect(profilePhotoInput).toBeInTheDocument();
    expect(profilePhotoInput).toHaveAttribute("type", "file");
    expect(newFriendButton).toBeInTheDocument();
})