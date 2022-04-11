import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24} />
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <DesktopActionGroupLeft>
                    <button>
                        <Search size={24} />
                    </button>
                    <button>
                        <Menu size={24} />
                    </button>
                </DesktopActionGroupLeft>
                <Logo />
                <DesktopActionGroupRight>
                    <SubscribeWrapper>
                        <Button>Subscribe</Button>
                        <Login href="#">Already a subscriber?</Login>
                    </SubscribeWrapper>
                </DesktopActionGroupRight>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const DesktopActionGroupLeft = styled(ActionGroup)`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: flex;
        flex: 1;
    }
`;

const DesktopActionGroupRight = styled(ActionGroup)`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
`;

const SubscribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Login = styled.a`
    text-decoration: underline;
    font-style: italic;
    position: relative;
    top: 8px;
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    @media ${QUERIES.desktopAndUp} {
        margin-top: 16px;
    }
`;

export default Header;
