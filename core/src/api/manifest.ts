import { manifestation } from "@duxcore/manifestation";
import { apiLimiter } from "./middleware/rateLimit";
import { teapot } from "./routes/teapot";
import cors from 'cors'
import { apiStats } from "./routes/stats";
import bodyParser from "body-parser";
import { authRoutes } from "./routes/auth";
import { resetEmail } from "./routes/resetEmail";
import { servicesRouter } from "./routes/services/services";
import { usersRouter } from "./routes/users/users";
import { monitorRouter } from "./routes/monitors/monitors";

export const apiManifest = manifestation.newManifest({
  middleware: [cors(), bodyParser.json()],
  versions: [
    {
      version: 1,
      middleware: [apiLimiter, cors()],
      routes: [teapot, apiStats, ...authRoutes, resetEmail],
      routers: [
        servicesRouter,
        usersRouter,
        monitorRouter
      ]
    }
  ]
})