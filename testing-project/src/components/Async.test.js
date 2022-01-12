import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 1000 } // 1s is the default
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
