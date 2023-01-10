import { useContext } from "react";
import { buildTagsButton } from "../../../store/Collection/function/build";

import FilterContext from "../../../store/Collection/context/filter-context";
import './Tag.scss';

const Tag = () => {
    const filterCtx = useContext(FilterContext);

    return(
        <div className='tags'>
            {/* Tags Button */}
            { buildTagsButton(filterCtx.tagsState) }
        </div>
    );
};

export default Tag;