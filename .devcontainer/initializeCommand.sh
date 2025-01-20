#!/usr/bin/env sh

# copy .env from .env.example
if [ ! -f .env ]; then
	cp .env.example .env
fi
