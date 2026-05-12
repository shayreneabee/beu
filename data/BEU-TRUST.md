# BEU Community Trust Layer

BEU should not depend only on outside APIs. The app needs its own community-generated and BEU-verified data layer.

## Phase 1 Prototype

- Seed a current user profile in `data/beu-community.json`
- Store saved places, reviews, and recommendations in localStorage
- Let users save/favorite places
- Let users open a review form from result cards
- Let users recommend places for future admin review
- Show badges, review count, saved places, and approved recommendations

## User Profile Fields

- profile photo/avatar
- display name
- home city/country
- bio
- favorite categories
- places reviewed
- recommendations made
- saved places
- badges/trust indicators
- verified user flag later

## Review Fields

- overall rating
- food rating
- service rating
- atmosphere rating
- culture/community rating
- safety/welcoming rating
- written review
- visit date
- experience type: Black-owned, Black-centered, culturally relevant, needs review
- tags

## Recommendation Fields

- place name
- category
- address/location
- website or social link
- why the user recommends it
- tags
- optional photo later
- submitted by user
- pending/approved/rejected status

## Trust Badges

- Local Guide
- Culture Scout
- Food Explorer
- Verified Reviewer
- Community Builder

## Production Requirements

- User authentication
- Profile editing and verification requests
- Admin moderation queue
- Spam prevention and abuse reporting
- Evidence/ownership verification workflow
- Photo upload moderation
- Rating aggregation and review quality scoring
