<script></script>

<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <slot name="title" />
        </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <slot name="content" />
    </p>
    <slot name="button" />
</div>