# 1️⃣ Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy lockfile and manifest first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the app
COPY . .

# ✅ Add build-time environment variable
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build Next.js with the API URL baked in
RUN pnpm run build

# 2️⃣ Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from build stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Install only production deps
RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000
CMD ["pnpm", "start"]
