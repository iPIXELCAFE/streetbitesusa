// ============================================================
//  STREET BITES USA — CONFIG
//  Fill in your keys below. Step-by-step guide in SETUP.md
// ============================================================

const CONFIG = {
  // 1. Get these from https://supabase.com → your project → Settings → API
  SUPABASE_URL: 'https://nemvtljikkdapbjgvqak.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_3HWxcz0RjebQFHTK4N-mCQ_AJaJx_Ga',

  // 2. Create a $29/month recurring product in Stripe, copy the Payment Link URL here
  //    https://dashboard.stripe.com/payment-links
  STRIPE_PAYMENT_LINK: 'https://buy.stripe.com/YOUR_LINK_HERE',

  // 3. Your live site URL (no trailing slash) — update after Netlify deploy
  SITE_URL: 'https://streetbitesusa.com',
};
