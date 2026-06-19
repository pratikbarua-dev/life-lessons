// src/app/pricing/page.jsx

import FeatureBreakdown from "@/components/pricing/FeatureBreakdown";
import PricingSection from "@/components/pricing/PricingSection";


export default function PricingPage() {
    return (
        <main className="w-full bg-[#0a0a0a] min-h-screen">
            <PricingSection></PricingSection>
            <FeatureBreakdown></FeatureBreakdown>
        </main>
    );
}