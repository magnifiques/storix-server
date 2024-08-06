/*
  Warnings:

  - You are about to drop the column `changePercantage` on the `PurchaseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `changePercantage` on the `SalesSummary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "changePercantage",
ADD COLUMN     "changePercentage" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SalesSummary" DROP COLUMN "changePercantage",
ADD COLUMN     "changePercentage" DOUBLE PRECISION;
