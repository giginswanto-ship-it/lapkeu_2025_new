# Dockerfile untuk Deployment Server Lapkeu 2025
FROM node:18-alpine

WORKDIR /app

# Copy seluruh file project & data real
COPY . .

# Expose Port
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

# Jalankan server native Node.js
CMD ["npm", "start"]
