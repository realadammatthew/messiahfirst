# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Messiah First for America PAC**, a SuperPAC with the mission to:
- Proclaim the Name of Yeshua (Jesus) the Jewish Messiah in America
- Educate the public on Messianic (Christian) policy in America
- Fundraise to support politicians who promote these policies

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Development Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Start production**: `npm run start`
- **Lint**: `npm run lint`
- **Type check**: `npx tsc --noEmit`

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable UI components
- `public/` - Static assets
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Key Features to Implement

The website should focus on:
1. **Mission Statement** - Clear presentation of the PAC's Messianic (Christian) values
2. **Policy Education** - Resources and information on supported policies
3. **Politician Support** - Information about endorsed candidates and their positions
4. **Donation/Fundraising** - Secure donation processing (compliance with FEC regulations)
5. **News/Updates** - Blog or news section for updates and announcements

## Compliance Notes

As a SuperPAC website, ensure compliance with:
- FEC reporting and disclosure requirements
- Political advertising regulations
- Donation tracking and limits