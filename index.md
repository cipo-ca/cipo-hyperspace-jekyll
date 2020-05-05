---
title: Home
sidebar:
  entries:
    - title: Welcome
      url: '#intro'
      is_primary: true
    - title: This Week
      url: '#this-week'
      is_primary: false
    - title: What we do
      url: '#what-we-do'
      is_primary: false
    - title: Learning Zone
      url: '#learning-zone'
      is_primary: false
    - title: Get involved
      url: '#get-involved'
      is_primary: false
sections:
  - title:
    logo_img:
      path: images/CIPO_logo_lrg.png 
      data_position: center center
    subtitle: |-
      Canadian Immunodeficiencies Patient Organization.  
    section_id: intro
    background_style: style1
    actions:
      - label: More
        url: '#this-week'
        is_scrolly: true
        is_primary: true
    component: intro.html
    type: intro
  - title:
    subtitle: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: this-week
    background_style: style2-alt
    component: campaign.html
    type: campaign
    actions:
      - label: More
        url: '#what-we-do'
        is_scrolly: true
        is_primary: true
  - title: CIPO Chapters
    subtitle: >-
         Phasellus convallis elit id ullam corper amet et pulvinar. Duis
         aliquam turpis mauris, sed ultricies erat dapibus.
    section_id: map
    background_style: style3-alt
    component: map.html
    type: map
  - title: What we do
    subtitle: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: what-we-do
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
      - label: More
        url: '#learning-zone'
        is_scrolly: true
        is_primary: true
    component: features.html
    type: features
  - title: Learning Zone
    section_id: learning-zone
    background_style: style3-alt
    component: spotlights.html
    type: spotlights
  - title: Get involved
    text: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: get-involved
    background_style: style4
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
