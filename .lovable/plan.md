

## Google Analytics 4 Integration

This plan will add Google Analytics 4 tracking to your website using your Measurement ID `G-LZDSHBJGW8`.

### What will be added

The standard GA4 tracking code (gtag.js) will be added to the `<head>` section of your `index.html` file, similar to how your Apollo tracking is currently set up.

### Implementation

**File: `index.html`**

Add the following Google Analytics 4 script tags before the closing `</head>` tag:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LZDSHBJGW8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LZDSHBJGW8');
</script>
```

### Technical Details

| Aspect | Detail |
|--------|--------|
| Measurement ID | G-LZDSHBJGW8 |
| Loading method | Async (non-blocking) |
| Placement | In `<head>`, after Apollo tracking |
| Cookie consent | Respects existing cookie consent banner |

### What you'll be able to track

Once live, GA4 will automatically track:
- Page views across all routes
- User sessions and engagement time
- Traffic sources and referrals
- Device and browser information
- Geographic location of visitors

### After deployment

1. Visit [Google Analytics](https://analytics.google.com) 
2. Navigate to your property
3. Check the **Realtime** report to verify data is being received
4. Data typically appears within 24-48 hours in standard reports

