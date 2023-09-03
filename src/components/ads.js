import React, { useEffect } from 'react';

const AdsComponent = () => {

    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    }, []);



    return (
        <>
            <ins class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-7734199699277397"
                data-ad-slot="4000504580"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </>
    );
};

export default AdsComponent;