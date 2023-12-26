import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Users from "../src/modules/users";
import { render } from "../tests/config/rtlConfig";
import { fakeUser } from "./data/fakeUser";
import { Https } from "../src/interface/http";
import { Logger } from "../src/interface/logger";

const get = vi.fn();
const logMessage = vi.fn();
const trackEvent = vi.fn();

const http: Https = {
  get,
};

const logger: Logger = {
  logMessage,
  trackEvent,
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Users page", () => {
  test("should render user list without data", async () => {
    get.mockImplementationOnce(() => Promise.resolve([])),
      render(<Users />, {
        http,
        logger,
      });
    await expect(screen.findByText(/Loading.../)).toBeDefined();
    expect(get).toHaveBeenCalled();
    expect(get).toHaveBeenCalledWith("http://localhost:3000/users");
    expect(screen.queryByPlaceholderText(/Find user/i)).toBeNull();
  });

  test("should render user list with data", async () => {
    get.mockImplementation(() => Promise.resolve({ data: fakeUser }));
    render(<Users />, {
      http,
      logger,
    });
    const allUsers = await screen.findAllByRole("listitem");
    expect(allUsers).toBeDefined();
    expect(allUsers).toHaveLength(fakeUser.length);
    expect(screen.getByText("John Doe")).toBeDefined();
    expect(get).toHaveBeenCalledWith("http://localhost:3000/users");
    expect(screen.getByText(/Search/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Find user/i)).toBeDefined();
    // expect(logMessage).toHaveBeenCalledWith("Users fetched");
  });

  test.skip("should render user list with error", async () => {
    const { container } = render(<Users />, {
      http,
      logger,
    });

    expect(container).toThrow();
  });
});
