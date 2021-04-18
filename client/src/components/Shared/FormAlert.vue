<template>
  <div class="text-white m-3">
    <span>
      <h4 class="d-inline-block">
        <b-icon-exclamation
          style="margin-right: 1rem; width: 2.5rem; height: 2.5rem; "
        ></b-icon-exclamation
        >{{ message }}
      </h4>
    </span>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>
};
