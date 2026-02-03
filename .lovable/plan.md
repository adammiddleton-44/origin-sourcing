

## Update Savings Metrics and Experience Years

This plan updates two key metrics across your website:
1. **Savings percentage**: Change from "20-50%" to "20-30%" 
2. **Years of experience**: Change from "15+" to "10"

---

### Files to Update

#### 1. index.html (4 changes)
- Line 11: Meta description - change "20-50%" to "20-30%"
- Line 32: JSON-LD schema description - change "20-50%" to "20-30%"
- Line 47: OpenGraph description - change "20-50%" to "20-30%"
- Line 48: Twitter description - change "20-50%" to "20-30%"

#### 2. src/components/SEO.tsx (1 change)
- Line 20: Default description - change "20-50%" to "20-30%"

#### 3. src/components/home/HeroSection.tsx (1 change)
- Line 41: Hero paragraph - change "20-50%" to "20-30%"

#### 4. src/components/home/StatsSection.tsx (2 changes)
- Line 13: Stats value - change "20-50%" to "20-30%"
- Line 25: Stats value - change "15+" to "10"

#### 5. src/components/home/FounderSection.tsx (1 change)
- Line 38: Credentials card - change "15+" to "10"

#### 6. src/components/home/ServicesPreview.tsx (1 change)
- Line 37: Section description - change "20-50%" to "20-30%"

#### 7. src/pages/Index.tsx (1 change)
- Line 13: Fallback SEO description - change "20-50%" to "20-30%"

#### 8. src/pages/About.tsx (3 changes)
- Line 23: Industry expertise description - change "15+" to "10"
- Line 64: Fallback SEO description - change "15+" to "10"
- Line 118: Stats grid value - change "15+" to "10"

#### 9. src/pages/ServiceDetail.tsx (1 change)
- Line 229: "Why Choose Us" paragraph - change "over 15 years" to "10 years"

#### 10. src/components/services/PackagingPurchasingPage.tsx (4 changes)
- Line 24: Benefit card title - change "20-50%" to "20-30%"
- Line 42: Factory network description - change "15+" to "10"
- Line 109: Hero description - change "20-50%" to "20-30%"
- Line 134: Problem section paragraph - change "20-50%" to "20-30%"

#### 11. src/components/services/ThreePLIntegrationPage.tsx (3 changes)
- Line 98: FAQ answer - change "20-50%" to "20-30%"
- Line 130: Hero description - change "20-50%" to "20-30%"
- Line 162: Problem section paragraph - change "20-50%" to "20-30%"

#### 12. src/components/services/PackagingDevelopmentPage.tsx (1 change)
- Line 246: Hero description - change "15+" to "10"

#### 13. src/data/services.ts (3 changes)
- Line 58: Benefits array - change "20-50%" to "20-30%"
- Line 70: 3PL full description - change "20-50%" to "20-30%"
- Line 108: Packaging Development full description - change "15+" to "10"

---

### Database Updates Required

The following SEO records in your backend database also need updating:

| Page Path | Current Value | New Value |
|-----------|---------------|-----------|
| `/` | "20-50%" | "20-30%" |
| `/about` | "15+ years" | "10 years" |
| `/services/purchasing` | "20-50%" | "20-30%" |
| `/services/3pl` | "20-50%" | "20-30%" |

These will be updated via SQL migration to ensure consistency.

---

### Summary

| Metric | Current | New | Total Changes |
|--------|---------|-----|---------------|
| Cost savings | 20-50% | 20-30% | ~18 occurrences |
| Experience | 15+ years | 10 years | ~9 occurrences |

**Note**: The specific "28-34% cost reductions" mentioned on the About page (line 43) will be kept as-is since that appears to be a specific case study result rather than a general claim.

