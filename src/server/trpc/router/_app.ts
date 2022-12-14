import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  registerUser: publicProcedure
    .input(
      z.object({
        email: z.string()
      })
    )
    .mutation(async ({ input }) => {
      const url = `${process.env.MAILER_LITE_URL}api/subscribers`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.MAILER_LITE_API}`
        },
        body: JSON.stringify(
          {
            email: input.email,
            groups: [process.env.MAILER_LITE_GROUP_FORMS]
          }
        )
      });
      console.log({ response })
      if (response.status == 422) {
        const json = await response.json();

        throw new TRPCError({
          code: "BAD_REQUEST",
          message: json.message
        })
      }

      return response;

    })
});

// export type definition of API
export type AppRouter = typeof appRouter;
