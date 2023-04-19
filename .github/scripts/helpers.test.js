const { describe, beforeEach } = require("node:test");
const {
  generateSlackValues,
  extractChromeUserData,
  pickSlackEmoji,
  extractWaterfallImg,
} = require("./helpers");

const { data } = require("./mock-data");

describe("Helpers", () => {
  describe("extractChromeUserData", () => {
    it("should return expected values", () => {
      // Arrange
      const { average } = data;

      // Act
      const result = extractChromeUserData(average.firstView);

      // Assert
      expect(result).toEqual({
        firstContentfulPaint: 971,
        largestContentfulPaint: 11769,
        timeToFirstByte: 505,
        timeToInteractive: 8803,
        totalBlockingTime: 7832,
        firstInputDelay: 1315,
        speedIndex: 4771,
        cumulativeLayoutShift: 0.1019,
      });
    });
  });

  describe("generateSlackValues", () => {
    it("should return when displayValue is 's'", () => {
      // Act
      const result = generateSlackValues(1000, "FCP");

      expect(result).toEqual({
        id: "FCP",
        value: "1s",
        emoji: expect.any(String),
      });
    });

    it("should return when displayValue is 'ms'", () => {
      // Act
      const result = generateSlackValues(200, "FID");

      expect(result).toEqual({
        id: "FID",
        value: "200ms",
        emoji: expect.any(String),
      });
    });
    it("should return when displayValue is null", () => {
      // Act
      const result = generateSlackValues(0.15, "CLS");

      expect(result).toEqual({
        id: "CLS",
        value: "0.15",
        emoji: expect.any(String),
      });
    });
  });

  describe("pickSlackEmoji", () => {
    it("should return green circle", () => {
      // Act
      const result = pickSlackEmoji(3, 5, 10);

      // Assert
      expect(result).toEqual(":large_green_circle:");
    });

    it("should return orange diamond", () => {
      // Act
      const result = pickSlackEmoji(6, 5, 10);

      // Assert
      expect(result).toEqual(":large_orange_diamond:");
    });

    it("should return red square", () => {
      // Act
      const result = pickSlackEmoji(13, 5, 10);

      // Assert
      expect(result).toEqual(":large_red_square:");
    });
  });

  describe("extractWaterfallImg", () => {
    it("should return img url", () => {
      // Arrange
      const result = extractWaterfallImg(data.median.firstView);

      expect(result).toBe(
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg"
      );
    });
  });
});
