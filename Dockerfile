# This Dockerfile is used for build a docker container to build ckman project which in Linux.
# You can run command like: "docker build -t ckman-build:go-1.16 ."
# the offical image is eoitek/ckman-build:go-1.16, You can pull it from dockerhub.

FROM amd64/golang:1.16

WORKDIR /var/
RUN apt-get update && apt-get install -y jq \
    && wget -q https://nodejs.org/download/release/v14.15.3/node-v14.15.3-linux-x64.tar.gz \
    && tar -xzf node-v14.15.3-linux-x64.tar.gz -C /usr/local/ \
    && ln -s /usr/local/node-v14.15.3-linux-x64/bin/node /usr/local/bin \
    && ln -s /usr/local/node-v14.15.3-linux-x64/bin/npm /usr/local/bin \
    && wget -q https://github.com/goreleaser/nfpm/releases/download/v2.2.4/nfpm_2.2.4_Linux_x86_64.tar.gz \
    && tar -xzvf nfpm_2.2.4_Linux_x86_64.tar.gz \
    && cp nfpm /usr/local/bin \
    && export GOPROXY=https://goproxy.io \
    && go get github.com/markbates/pkger/cmd/pkger

COPY frontend/package.json .
RUN npm install