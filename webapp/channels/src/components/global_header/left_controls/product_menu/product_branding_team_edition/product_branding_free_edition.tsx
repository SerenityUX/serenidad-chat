// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import Logo from 'images/logo.svg';

const ProductBrandingFreeEditionContainer = styled.span`
    display: flex;
    align-items: center;

    > * + * {
        margin-left: 8px;
    }
`;

const StyledLogo = styled.img`
    width: 116px;
    height: 20px;
    filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2000%) hue-rotate(200deg) brightness(0.75);
`;

const ProductBrandingFreeEdition = (): JSX.Element => {
    return (
        <ProductBrandingFreeEditionContainer tabIndex={-1}>
            <StyledLogo
                src={Logo}
                alt="Logo"
            />
        </ProductBrandingFreeEditionContainer>
    );
};

export default ProductBrandingFreeEdition;
