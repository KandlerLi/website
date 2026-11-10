# Personal website

Terraform and content for the static site at
[www.jkandler.de](https://www.jkandler.de/). The content in `site/` is plain
HTML and CSS with no build step:

```text
Route53 (www.jkandler.de) -> CloudFront -> S3 (private, via Origin Access Control)
```

## Documentation

Setup, operations and design notes, including the sections code comments refer to:
[`docs/README.md`](docs/README.md)
