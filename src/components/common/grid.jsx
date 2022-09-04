import React from 'react';

export function Grid(props) {
    return (
        <div class="columns is-multiline">
            {
                props.children.map((child, idx) => 
                    <div class="column is-4">
                        {child}
                    </div>
                )
            }
        </div>
    );
}