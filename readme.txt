Why [attr.data-bs-target] instead of [data-bs-target]?

        Angular treats dashed attributes (data-bs-target, aria-label, etc.) specially:

        If you write [data-bs-target]="'#myModal'" → Angular will think dataBsTarget is a property binding.
        But there is no DOM property called dataBsTarget, so it won’t work.

        If you write [attr.data-bs-target]="'#myModal'" → Angular knows you mean set the HTML attribute data-bs-target, not a property. ✅

        That’s why we prefix with attr. for such attributes.