#!/usr/bin/env bash

BLUE='\033[0;34m';
GREEN='\033[0;32m';
WHITE='\033[0m';


printf "\n\n";
printf "${BLUE}Get Composer Installer\n${WHITE}";
printf "${BLUE}——————————————————————\n\n${WHITE}${GREEN}";
curl -o installer.php 'https://getcomposer.org/installer';
printf "✓ Done"

printf "\n\n";
printf "${BLUE}Install Composer\n${WHITE}";
printf "${BLUE}————————————————\n\n${WHITE}${GREEN}";
php ./installer.php;
printf "✓ Done"

printf "\n\n";
printf "${BLUE}Install Twig\n${WHITE}";
printf "${BLUE}—————————————\n\n${WHITE}${GREEN}";
php ./composer.phar install --no-dev;
printf "✓ Done"

printf "\n\n";
printf "${BLUE}Remove Composer and theirs installer\n${WHITE}";
printf "${BLUE}——————————————————————————————————\n\n${GREEN}";
rm -f ./composer.phar;
rm -f ./installer.php;
printf "✓ Done"


printf "\n\n${BLUE}";
printf "╔══════════════════════════════════╗\n";
printf "║ ⚡ Gulp-Twig-Php is ready to use! ║\n";
printf "╚══════════════════════════════════╝\n";

printf "\n\n${WHITE}";