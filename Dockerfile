FROM node:20.19.0-bookworm@sha256:735b1ba7e4550c415f98568efbf527e3f75828ac4f10692e490ca78e11d89f6e

RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libcups2 \
    libgbm-dev \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libxss1 \
    xdg-utils \
    xvfb && \
    curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install -y --no-install-recommends google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

COPY . .

RUN npm ci
ENTRYPOINT [ "/run-checklinks.sh" ]