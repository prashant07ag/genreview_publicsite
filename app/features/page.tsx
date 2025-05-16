import React from 'react'
import StreamlineReviewsFeature from '@/components/streamlinereviews_feature'
import AIReviewsFeature from '@/components/aireview_feature'
import DashboardFeature from '@/components/dashboard_feature'
import StoreLocatorGuide from '@/components/store_locator_guide'
import PropertyManagementFeature from '@/components/property_managment'
import Feature_hero from '@/components/feature_hero'
const FeaturesPage = () => {
    return (
        <div className="overflow-hidden">
            <Feature_hero />
            <StreamlineReviewsFeature />
            <DashboardFeature />
            <StoreLocatorGuide />
            <AIReviewsFeature />
            <PropertyManagementFeature />
        </div>
    )
}

export default FeaturesPage
