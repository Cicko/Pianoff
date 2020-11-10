/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 10.11.20 - 10:22
 **/
import * as React from 'react'
import * as classNames from 'classnames'
import { DropdownProps } from './dropdown';
import { useDropdown, useTranslation } from 'lib/hooks';

/**
 * Dropdown component.
 *
 * @param props : DropdownProps
 * @constructor
 */
const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
    const { data, renderItem, id } = props
    const { isDropdownVisible, hideDropdown } = useDropdown(id)
    const ref = React.useRef(null)
    const dropdownClassNames = classNames(
        "dropdown-menu",
        `${id}-dropdown`,
        "dropdown-menu-right",
        { "show": isDropdownVisible }
    )

    React.useEffect(() => {

        const handler = (e) => {
            if (isDropdownVisible && !ref.current?.contains(e.target)) {
                hideDropdown()
            }
        }

        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [isDropdownVisible])

    return (
        <div className={dropdownClassNames} ref={ref}>
            {data?.map(renderItem)}
        </div>
    )
}

export default Dropdown
