import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const enrollmentSubmissionsTable = pgTable("enrollment_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  age: text("age").notNull(),
  program: text("program").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertEnrollmentSubmissionSchema = createInsertSchema(enrollmentSubmissionsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertEnrollmentSubmission = z.infer<typeof insertEnrollmentSubmissionSchema>;
export type EnrollmentSubmission = typeof enrollmentSubmissionsTable.$inferSelect;
