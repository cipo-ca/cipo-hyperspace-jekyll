---
title: Home
sidebar:
  entries:
    - title: Welcome
      url: '#intro'
      is_primary: true
    - title: Who we are
      url: '#one'
      is_primary: false
    - title: Subscribe
      url: '#two'
      is_primary: false
    - title: Get in touch
      url: '#three'
      is_primary: false
sections:
  - title:
    logo_img:
      path: images/CIPO_logo.png 
      data_position: center center
    subtitle: |-
      We are the Canadian Immunodeficiencies Patient Organization.  
      A Community of PI patients accross Canada.  
    section_id: intro
    background_style: style1
    actions:
      - label: Learn more
        url: '#one'
        is_scrolly: true
        is_primary: true
    component: intro.html
    type: intro
  - title: Campaign Section
    section_id: campaign
    background_style: style2
    component: campaign.html
    type: campaign
  - title: What we do
    subtitle: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: one
    background_style: style3
    features_list:
      - title: Peer Support Program
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-code
      - title: Monthly Patient Meet-Ups
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-lock
      - title: Patient Education Events
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-cog
      - title: Patient Advocacy
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-desktop
      - title: Patient Registry and Mailing List
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-chain
      - title: Plasma Supply Issue Tracking 
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-diamond
    actions:
      - label: Learn more
        url: /generic
        is_scrolly: false
        is_primary: false
    component: features.html
    type: features
  - title: Spotlights Section
    section_id: two
    background_style: style2
    component: spotlights.html
    type: spotlights
  - title: Get in touch
    text: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: three
    background_style: style1
    contact_list:
      - title: Address
        text: |-
          12345 Somewhere Road #654
          Nashville, TN 00000-0000
          USA
      - title: Email
        text: user@Hyperspace.tld
        url: '#'
      - title: Phone
        text: (000) 000-0000
    social:
      title: Social
      social_icons:
        - title: Twitter
          icon: fa-twitter
          url: '#'
        - title: Facebook
          icon: fa-facebook
          url: '#'
        - title: GitHub
          icon: fa-github
          url: '#'
        - title: Instagram
          icon: fa-instagram
          url: '#'
        - title: LinkedIn
          icon: fa-linkedin
          url: '#'
    component: contact.html
    type: contact
menus:
  main:
    title: Home
    weight: 1
layout: home
---
