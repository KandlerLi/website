# CV as code

`cv.yaml` is the single source of truth for Julian's CV — content, not
layout. It's rendered to `../site/cv.pdf` with
[RenderCV](https://docs.rendercv.com), then deployed by the existing
`apply.yml` pipeline the same way as every other file under `site/`: on
merge to `main`, CI syncs `site/` to S3 and invalidates CloudFront. There is
no separate build step in CI — the PDF is a committed build artifact,
rebuilt locally and committed like any other change under `site/`.

The vault mirror of this content is
`/home/julian/second-brain/people/julian-cv.md` — keep both in sync when
either changes (see that repo's `people/julian-cv.md` for the note pointing
back here).

## Rebuild after editing `cv.yaml`

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/rendercv render cv.yaml     # -> build/cv.pdf (gitignored)
cp build/cv.pdf ../site/cv.pdf
```

Then commit `cv.yaml` and the updated `site/cv.pdf` together, and open a PR
as usual (`website` requires branch protection — see
`github/repo-infra/config.yml`).

## Design

Uses RenderCV's built-in `classic` theme with a neutral grey/black palette
(no default blue) to match the site's minimal look — see the `design:`
block in `cv.yaml`. No photo: keeps it a plain, international-style CV
rather than a German `Lebenslauf` with `Foto`.
