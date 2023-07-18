# Cleanup terminal
printf "\033[3J\033c\033[3J"

# Auto init a redwoodjs project for Gitpod if missing
if test ! -e redwood.toml; then {
  # Create
  yarn create redwood-app . --overwrite --yarn-install --typescript --git-init=false

  # Change the default `sqlite` datasource provider to `postgres`
  sed -i 's|provider = "sqlite"|provider = "postgres"|' "api/db/schema.prisma"
} fi

if test -e redwood.toml; then {
  yarn install
} fi
