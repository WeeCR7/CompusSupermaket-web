<template>
  <el-container class="content" direction="vertical">
    <el-container>
      <aside-menu></aside-menu>
      <el-main class="main">
        <bread-crumb></bread-crumb>
        <el-tabs class="tabs" v-model="editableTabsValue" type="card" closable="true" @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from './components/asideMenu'
import BreadCrumb from "./components/breadCrumb";

export default {
  name: "layout",
  components: {
    BreadCrumb,
    AsideMenu
  },
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
}
</script>

<style>
.content{
  height: 100%;
  min-height:100vh;
}
.main{
  background-color: white;
  color: #333;
}
.tabs{
  margin-top: 30px;
  margin-left: 0;
  height: 100%;
}

</style>
