import { userDAO } from "../src/entities/userDAO";
import { beforeEach, describe, expect, test, vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});
describe("User DAO", () => {
  test("should get user", async () => {
    const http = {
      get: vi.fn(() => Promise.resolve({ data: [] })),
    };
    const logger = {
      logMessage: vi.fn(),
      trackEvent: vi.fn(),
    };
    const userdao = new userDAO(http, logger, "http://localhost:3000");
    await userdao.getUser();
    expect(http.get).toHaveBeenCalled();
    expect(http.get).toHaveBeenCalledWith("http://localhost:3000/users");
    expect(logger.trackEvent).toHaveBeenCalled();
    // expect(http.get).toHaveBeenCalledWith("Users fetched", { total: 0 }); //TODO: make it possible
  });

  test("should not get user when error", async () => {
    const http = {
      get: vi.fn(() => Promise.reject("Error")),
    };
    const logger = {
      logMessage: vi.fn(),
      trackEvent: vi.fn(),
    };
    const userdao = new userDAO(http, logger, "http://localhost:3000");
    await userdao.getUser();
    expect(http.get).toHaveBeenCalled();
    expect(http.get).toHaveBeenCalledWith("http://localhost:3000/users");
    expect(logger.logMessage).toHaveBeenCalled();
    expect(logger.logMessage).toHaveBeenCalledWith("Unable to fetch users");
  });
});
