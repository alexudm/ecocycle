# EcoCycle Industrial Bio-Cluster

Static site for the EcoCycle bio-cluster: waste-to-energy plant, greenhouse complex, and sturgeon farm.

**Live site:** https://alexudm.github.io/ecocycle/

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

## Deployment

Pushes to `main` or `test-repositary` deploy automatically via [GitHub Actions](.github/workflows/deploy-pages.yml).

First-time setup on GitHub:

1. **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions**

### Push from this machine

GitHub credentials are required once:

```bash
cd /home/alex/site
git push -u origin test-repositary
```

If prompted, sign in with a [Personal Access Token](https://github.com/settings/tokens) (scope: `repo`) or set up SSH keys.
