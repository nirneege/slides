FROM mcr.microsoft.com/playwright:latest

ARG USER_NAME
ARG USER_ID
ARG GROUP_ID

ENV USER_NAME=${USER_NAME:-node}
ENV USER_ID=${USER_ID:-1000}
ENV GROUP_ID=${GROUP_ID:-1000}

RUN apt update && \
    apt install -y build-essential gh make

# 環境変数で指定したUID, GID のユーザーを作成
# 既に存在している場合は、ユーザーを削除して作り直す
RUN \
    EXIST_USER_NAME=$(getent passwd $USER_ID | cut -d: -f1); \
    if [ -n "$EXIST_USER_NAME" ]; then \
        userdel -r $EXIST_USER_NAME; \
    fi; \
    EXIST_GROUP_NAME=$(getent group $GROUP_ID | cut -d: -f1); \
    if [ -n "$EXIST_GROUP_NAME" ]; then \
        groupdel $EXIST_GROUP_NAME; \
    fi; \
    groupadd -g $GROUP_ID $USER_NAME; \
    useradd -m -s /bin/bash -u $USER_ID -g $GROUP_ID $USER_NAME

USER $USER_NAME
WORKDIR /workspace
