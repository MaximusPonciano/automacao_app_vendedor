#!/bin/sh

if [ "$HUSKY" = "0" ]; then
  exit 0
fi

if [ -z "$husky_skip_init" ]; then
  husky_skip_init=1
  export husky_skip_init

  command_exists() {
    command -v "$1" >/dev/null 2>&1
  }

  if command_exists winpty && command_exists cygpath; then
    case "$TERM" in
      xterm* | rxvt* | cygwin | ansi | screen* | tmux* | vt100 | alacritty | konsole*)
        ;;
      *)
        export TERM=xterm-256color
        ;;
    esac
  fi
fi
