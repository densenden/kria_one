---

## Development & Deployment

1. **Install**  
   `npm install` (or `yarn install`)

2. **Run Sanity Studio**  
   - Go to `packages/sanity` and run `npm run dev` to start the CMS locally.

3. **Local Development**  
   - `cd apps/kria-training && npm run dev`
   - `cd apps/kria-centro && npm run dev`
   Each site runs on a different port, e.g. `http://localhost:3000` and `http://localhost:3001`.

4. **Deployment**  
   - Push to GitHub; Vercel builds each app separately.
   - Configure two projects in Vercel, pointing to `apps/kria-training` and `apps/kria-centro`.

---

## Next Steps

- Integrate **Stripe** test keys and set up products/offers in the CMS.
- Add i18n logic for language toggles (English/Spanish).
- Implement booking forms with dynamic availability if needed (e.g., group size limits).
- Configure analytics and ensure UTM parameters are logged or handled.

---

## Contributing

- Use feature branches with clear commit messages (`feat:`/`fix:`/`chore:`).
- Submit pull requests for any new components or CMS fields.
- Update this README if major structural or process changes occur.

---

© 2025 KRIA – Shaping Mind & Body