<template>
  <div>
    <!-- <link href="../assets/bootstrap.min.css" rel="stylesheet"> -->

    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
          <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <b-nav pills>
            <b-nav-item-dropdown class="nav-link px-2" id="dashboard-nav-dropdown" text="대시보드" toggle-class="nav-link-dashboard" left>
              <b-dropdown-item href="/dashboard/project">프로젝트</b-dropdown-item>
              <b-dropdown-item href="/dashboard/team">팀</b-dropdown-item>
              <b-dropdown-item href="/dashboard/user">개인</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="nav-link px-2" id="management-nav-dropdown" text="관리" toggle-class="nav-link-management" left>
              <b-dropdown-item href="/management/project">프로젝트</b-dropdown-item>
              <b-dropdown-item href="/management/team">팀</b-dropdown-item>
              <b-dropdown-item href="/management/user">구성원</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-link px-2"><a href="/project/mm" class="nav-link">MM</a></li>
<!--            <b-nav-item-dropdown class="nav-link px-2" id="mm-nav-dropdown" text="MM" toggle-class="nav-link-mm" left>-->
<!--              <b-dropdown-item href="/project/mm">MM</b-dropdown-item>-->
<!--              <b-dropdown-item href="/project/pm">PM</b-dropdown-item>-->
<!--            </b-nav-item-dropdown>-->
            <b-nav-item href="/profile" class="nav-link px-2">이름</b-nav-item>
        </b-nav>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">Login</button>
          <button type="button" class="btn btn-primary">Sign-up</button>
        </div>
      </header>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.form-control-dark {
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle:not(:focus) {
  outline: 0;
}

</style>