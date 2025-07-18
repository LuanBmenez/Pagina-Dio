import styled, { css } from 'styled-components';
import { IbuttonStyle } from './types';

export const ButtonContainer = styled.button<IbuttonStyle>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;
        color: #000000;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: ' ';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`;
