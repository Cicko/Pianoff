import * as React from 'react';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';

/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 23.10.20 - 22:54
 **/

export interface DropdownContextInterface {
    openDropdown: string,
    setOpenDropdown: Dispatch<SetStateAction<string>>
}

export const DropdownContext: React.Context<DropdownContextInterface> = React.createContext(null)
