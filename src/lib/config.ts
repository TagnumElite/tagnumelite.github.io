import { dev } from '$app/environment';

export const title = 'TagnumElite';
export const subtitle = 'Psuedo-Random Coder';
export const description = `A website for me, TagnumElite, to showcase, discuss and explore
  my projects ands thoughts.`;
export const email = 'me@tagnumelite.com';
export const search = true;

export const url = dev ? 'localhost:5173' : 'https://tagnumelite.com';

// Socials
export const github_username = "TagnumElite";
export const twitter_username = "TagnumElite";

/* OLD JEKYLL CONFIG OPTIONS
author:
  name   : "TagnumElite"
  avatar : "/assets/images/avatar.jpg"
  bio    : "{{ Insert biography here - ERR: Life Not Found }}"
  links:
    - label: "Website"
      icon: "fas fa-fw fa-link"
      url: "https://tagnumelite.com"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/TagnumElite"
    - label: "Discord"
      icon: "fab fa-fw fa-discord"
      url: "https://discord.gg/XHCBxPA"
    - label: "PayPal"
      icon: "fab fa-fw fa-paypal"
      url: "https://paypal.me/TagnumElite"
    - label: "Stack Exchange"
      icon: "fab fa-fw fa-stack-exchange"
      url: "https://stackexchange.com/users/4947564/tagnumelite"
    - label: "Twitch"
      icon: "fab fa-fw fa-twitch"
      url: "https://www.twitch.tv/tagnumelite"
    - label: "Digital Ocean"
      icon: "fab fa-fw fa-digital-ocean"
      url: "https://m.do.co/c/da7c1e7ccc7a"
    - label: "YouTube"
      icon: "fab fa-fw fa-youtube"
      url: "https://www.youtube.com/channel/UChphbk4d1OvPilYwRnj_Z5w"

footer:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/TagnumElite"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/TagnumElite"
    - label: "Discord"
      icon: "fab fa-fw fa-discord"
      url: "https://discord.gg/XHCBxPA"
    - label: "Steam"
      icon: "fab fa-fw fa-steam"
      url: "https://steamcommunity.com/id/TagnumElite/"
    - label: "NPM"
      icon: "fab fa-fw fa-npm"
      url: "https://www.npmjs.com/~tagnumelite"
    - label: "PyPi"
      icon: "fab fa-fw fa-python"
      url: "https://pypi.org/user/TagnumElite/"
    - label: "Stack Exchange"
      icon: "fab fa-fw fa-stack-exchange"
      url: "https://stackexchange.com/users/4947564/tagnumelite"
    - label: "Twitch"
      icon: "fab fa-fw fa-twitch"
      url: "https://www.twitch.tv/tagnumelite"
    - label: "YouTube"
      icon: "fab fa-fw fa-youtube"
      url: "https://www.youtube.com/channel/UChphbk4d1OvPilYwRnj_Z5w"

defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
  # _pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true

category_archive:
  type: liquid
  path: /categories/
tag_archive:
  type: liquid
  path: /tags/

social:
  name: TagnumElite
  links:
    - "https://twitter.com/TagnumElite"

analytics:
  provider: "google-gtag"
  google:
    tracking_id: "UA-49499868-5"
    anonymize_ip: false # default

comments:
  provider: "giscus"
  giscus:
    repo_id              : "MDEwOlJlcG9zaXRvcnkyMTIwMjMyODY="
    category_name        : "Comments"
    category_id          : "DIC_kwDODKM39s4COhbM"
    discussion_term      : "pathname"
    reactions_enabled    : '1'
    theme                : "dark"
*/