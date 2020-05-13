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
  - title: This Week in PI
    subtitle: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: this-week
    background_style: style2-alt
    component: this-week.html
    type: campaign
    actions:
      - label: More
        url: '#what-we-do'
        is_scrolly: true
        is_primary: true
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
          Are you newly diagnosed or in need of a little extra support? 
          CIPO has you covered. Our Peer Support Program will pair you with a specially trained coach, 
          to help guide you through your patient journey.
        icon: 
      - title: Financial Assistance Program
        text: >-
          Are you overwhelmed because of your PI? You are not alone. 
          Our financial assistance program can help you get back on track. 
        icon: fa-lock
        bg: 
      - title: PI Meetups
        text: >-
          These fun, informal get togethers help you connect and share with others who understand exactly what you are experiencing. 
          Come on out to one in your area! Can’t find one near you? We’ll give you everything you need to get you started.
        icon: fa-users 
      - title: Education Sessions
        text: >-
          CIPO will always do our best to keep you up-to-date and informed. 
          Learn about the very latest in treatments and disease states regarding PI.
        icon: fa-desktop
      - title: Patient Advocacy
        text: >-
          CIPO is proud to be the voice of the PI community in Canada. 
          We continue to advocate on all levels of governement of issues relating to the PI, 
          including: IG and plasma supply, Newborn Screening, paid plasma, Emergency Medicine, Comprehensive Care, and more.
        icon: fa-chain
      - title: Research and Technology
        text: >-
          Find all you need to know to keep yourself up to date on the latest in research and technology in PI treatment and IG. 
        icon: fa-code
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
  - title: CIPO Chapters
    subtitle: >-
         Phasellus convallis elit id ullam corper amet et pulvinar. Duis
         aliquam turpis mauris, sed ultricies erat dapibus.
    section_id: map
    background_style: style3-alt
    component: map.html
    type: map
  - title: Get Involved
    subtitle: >-
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
      mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
      hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
      quis lorem.
    section_id: get-involved
    background_style: style3
    cta_list:
      - title: Join CIPO
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-users
        bg: images/people-coffee-meeting-team-7096.jpg
      - title: Volunteer with CIPO
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-hands-helping
        bg: images/remi-walle-UOwvwZ9Dy6w-unsplash.jpg
      - title: Find an event
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-calendar-check
        bg: images/angela-bailey-GfUk_pFtjz0-unsplash.jpg
      - title: Donate
        text: >-
          Phasellus convallis elit id ullam corper amet et pulvinar. Duis
          aliquam turpis mauris, sed ultricies erat dapibus.
        icon: fa-donate
        bg: images/united-nations-covid-19-response-gAcTJQ4O67g-unsplash.gif
    component: calls-to-action.html
    type: features
menus:
  main:
    title: Home
    weight: 1
layout: home
---
