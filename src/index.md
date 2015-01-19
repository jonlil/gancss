

# Introduction

The purpose of this guide is to provide a solid foundation for maintaining a consistent visual style and a high quality code base across all of our sites.

      WHAT WE'LL COVER:

    - Preprocessing
    - Prefixing
    - Folder Architecture
    - File Layout
        - Commenting
        - Spacing
    - Build system
    - Usage
    - Documentation

A quick note on browser support. We aim to target the last 2 versions of popular browsers. At the time of writing, that means IE 10 & IE 11. Other target browsers automatically update which makes them a non-issue.

# Folder Architecture

The folder structure is very much inspired by smaccs approach to CSS. We do our best to keep each file small in order to improve readability and organization.

    src/scss/
    |-- gancss.scss
    |-- base/
    |-- layout/
    |-- modules/
    |-- tools/

- `gancss.sccs` – This is where we import all of our files.
- `base` – Here lives the element selectors such as forms, tables and typography.
- `layout` – This folder contains major layout sections such as header, footer and grid.
- `modules` – This is where we keep all our reusable chunks of code such as buttons and alerts.
- `tools` – This folder holds our helper classes, mixins and our global settings.