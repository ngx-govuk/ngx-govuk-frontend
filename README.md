<div id="top"></div>


GOV.UK Angular Components
[![Unit tests][unit-tests-badge]][unit-tests-url]
[![Code analysis][codeql-badge]][codeql-url]
[![Issues][issues-shield]][issues-url]
[![Inactively Maintained][maint-level-shield]][maint-level-url]
[![License][license-shield]][license-url]
=========================

[Angular](https://angular.io/) components based on the [GOV.UK Design System](https://design-system.service.gov.uk/)



## Overview

This library aims is to track the
[govuk-frontend project](https://github.com/alphagov/govuk-frontend) for the components to implement and how they should look and behave using the existing CSS where possible.



## Table of contents
<ul>
  <!--li><a href="#getting-started">Getting started</a></li-->
  <!--li><a href="#usage">Usage</a></li-->
  <li><a href="#components">Components</a></li>
  <li><a href="#browser-support">Browser support</a></li>
  <li><a href="#assistive-technology-support">Assistive technology support</a></li>
  <li><a href="#accessibility">Accessibility</a></li>
  <li><a href="#currently-used-by">Currently used by</a></li>
  <li><a href="#how-to-contribute">How to contribute</a></li>
  <li><a href="#contributors">Contributors</a></li>
  <li><a href="#license">License</a></li>
</ul>

<p align="right">(<a href="#top">back to top</a>)</p>



<!--
## Getting started

<p align="right">(<a href="#top">back to top</a>)</p>
-->



<!--
## Usage

<p align="right">(<a href="#top">back to top</a>)</p>
-->



## Components

List of the included [GDS components](https://design-system.service.gov.uk/components/):

- [Accordion](projects/ngx-govuk-frontend/src/lib/accordion/README.md)
- [Back link](projects/ngx-govuk-frontend/src/lib/back-link/README.md)
- [Breadcrumbs](projects/ngx-govuk-frontend/src/lib/breadcrumbs/README.md)
- [Button](projects/ngx-govuk-frontend/src/lib/directives/button/README.md)
- Character count (part of the [textarea](projects/ngx-govuk-frontend/src/lib/textarea/README.md) component)
- [Checkboxes](projects/ngx-govuk-frontend/src/lib/checkboxes/README.md)
- [Date input](projects/ngx-govuk-frontend/src/lib/date-input/README.md)
- [Details](projects/ngx-govuk-frontend/src/lib/details/README.md)
- [Error message](projects/ngx-govuk-frontend/src/lib/error-message)
- [Error summary](projects/ngx-govuk-frontend/src/lib/error-summary/README.md)
- [Fieldset](projects/ngx-govuk-frontend/src/lib/fieldset/README.md)
- [File upload](projects/ngx-govuk-frontend/src/lib/file-upload/README.md)
- [Footer](projects/ngx-govuk-frontend/src/lib/footer/README.md)
- [Header](projects/ngx-govuk-frontend/src/lib/header/README.md)
- [Inset text](projects/ngx-govuk-frontend/src/lib/directives/inset-text/README.md)
- [Panel](projects/ngx-govuk-frontend/src/lib/panel/README.md)
- [Phase banner](projects/ngx-govuk-frontend/src/lib/phase-banner/README.md)
- [Radios](projects/ngx-govuk-frontend/src/lib/radio/README.md)
- [Select](projects/ngx-govuk-frontend/src/lib/select/README.md)
- [Skip link](projects/ngx-govuk-frontend/src/lib/skip-link/README.md)
- [Summary list](projects/ngx-govuk-frontend/src/lib/summary-list/README.md)
- [Table](projects/ngx-govuk-frontend/src/lib/table/README.md)
- [Tabs](projects/ngx-govuk-frontend/src/lib/tabs/README.md)
- [Tag](projects/ngx-govuk-frontend/src/lib/tag/README.md)
- [Text input](projects/ngx-govuk-frontend/src/lib/text-input/README.md)
- [Textarea](projects/ngx-govuk-frontend/src/lib/textarea/README.md)
- [Warning text](projects/ngx-govuk-frontend/src/lib/warning-text/README.md)

List of the [GDS components](https://design-system.service.gov.uk/components/) not included:
- Cookie banner (not included)

<p align="right">(<a href="#top">back to top</a>)</p>



## Browser support

The components should work on the latest versions of Edge, Google Chrome, and Mozilla Firefox. Internet Explorer is *not supported* due to its [imminent discontinuation](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-internet-explorer-).

<p align="right">(<a href="#top">back to top</a>)</p>



## Assistive technology support

Pages using the components included in this library are tested for assistive technologies support and work with the majority of the [recommended assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#which-assistive-technologies-to-test-with) listed in the [Service Manual](https://www.gov.uk/service-manual). So, the components are tested indirectly and users of this library should perform their own testing for assistive technologies support.

<p align="right">(<a href="#top">back to top</a>)</p>



## Accessibility

The components included in this library should conform to level AA [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) satisfying most requirements, if not all. Although pages using these components are tested for conformance to level AA of (WCAG) 2.1, users of this library should perform their own accessibility testing to [meet the GDS accessibility requirements](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction) or want to make [WCAG 2.1 conformance claim](https://www.w3.org/TR/WCAG21/#conformance-claims).

<p align="right">(<a href="#top">back to top</a>)</p>



## Currently used by

- Permitting Monitoring Reporting Verification (PMRV)

<p align="right">(<a href="#top">back to top</a>)</p>



## How to contribute

This project is public and contributions are welcome. The maintainers are a small number of volunteers and although they are around to integrate code contributions, respond to issues, or answer questions, a response may take some time, so please be patient.

If you would like to contribute or help maintain this, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

<!-- TODO Incorporate a process such as below or consider adding a CONTRIBUTING.md? -->
<!--
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
-->

If you find this project usefull, don't forget to give the a star!

<p align="right">(<a href="#top">back to top</a>)</p>



## Contributors

- [bochalito](https://github.com/bochalito)
- [Gkinakos](https://github.com/Gkinakos)
- [Nosfistis](https://github.com/Nosfistis)

<p align="right">(<a href="#top">back to top</a>)</p>



## License

Unless stated otherwise, the codebase is distributed under the MIT License (see [LICENSE][license-url] for more information).
This covers both the codebase and any sample code in the documentation. 

<p align="right">(<a href="#top">back to top</a>)</p>



[unit-tests-badge]: https://github.com/ngx-govuk/ngx-govuk-frontend/actions/workflows/unit-tests.yml/badge.svg
[unit-tests-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/actions/workflows/unit-tests.yml?query=workflow%3A%22Unit+tests+CI%22+branch%3Amain

[codeql-badge]: https://github.com/ngx-govuk/ngx-govuk-frontend/actions/workflows/codeql-analysis.yml/badge.svg
[codeql-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/actions/workflows/codeql-analysis.yml?query=workflow%3ACodeQL+branch%3Amain

[issues-shield]: https://img.shields.io/github/issues/ngx-govuk/ngx-govuk-frontend.svg
[issues-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/issues

[contributors-shield]: https://img.shields.io/github/contributors/ngx-govuk/ngx-govuk-frontend.svg
[contributors-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/ngx-govuk/ngx-govuk-frontend.svg
[forks-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/network/members

[stars-shield]: https://img.shields.io/github/stars/ngx-govuk/ngx-govuk-frontend.svg
[stars-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/stargazers

[maint-level-shield]: https://img.shields.io/badge/Maintenance%20Level-Inactively%20Maintained-yellowgreen.svg
[maint-level-url]: https://gist.github.com/cheerfulstoic/d107229326a01ff0f333a1d3476e068d

[license-shield]: https://img.shields.io/github/license/ngx-govuk/ngx-govuk-frontend.svg
[license-url]: https://github.com/ngx-govuk/ngx-govuk-frontend/blob/master/LICENSE
