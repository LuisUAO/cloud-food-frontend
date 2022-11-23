import React from 'react';

export function Grid({ children }) {
    return (
        <div class="columns is-multiline">
            {
                children && children.map((child, idx) => 
                    <div key={idx} class="column is-4">
                        {child}
                    </div>
                )
            }
        </div>
    );
}